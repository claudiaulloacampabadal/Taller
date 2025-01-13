using SandboxProf.Models.Domain;
using Microsoft.Data.SqlClient;

namespace SandboxProf.Models.DAO
{
    public class StudentDAO
    {
        private readonly IConfiguration _configuration;
        string connectionString;

        public StudentDAO(IConfiguration configuration)
        {
            _configuration = configuration;
            connectionString = _configuration.GetConnectionString("DefaultConnection");
        }
        
        public int Insert(Student student)
        {
            int result = 0; //saves 1 or 0 depending on the insertion result
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                SqlCommand command = new SqlCommand("InsertStudent", connection);
                command.CommandType = System.Data.CommandType.StoredProcedure;

                command.Parameters.AddWithValue("@Name", student.Name);
                command.Parameters.AddWithValue("@Email", student.Email);
                command.Parameters.AddWithValue("@Password", student.Password);
                command.Parameters.AddWithValue("@Nationality_Id", student.Nationality.Id);

                //resultado de conexiones
                result = command.ExecuteNonQuery();
                connection.Close();
            }
            return result;
        }

        public Student Get(string email)
        {
            Student student = new Student();
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                SqlCommand command = new SqlCommand("GetStudentByEmail", connection);
                command.CommandType = System.Data.CommandType.StoredProcedure;

                command.Parameters.AddWithValue("@Email", email);
                SqlDataReader reader = command.ExecuteReader();

                if (reader.Read()) //asks if a user has been found with the given email
                {
                    student.Name = reader.GetString(0);
                    student.Email = reader.GetString(1);
                }

                connection.Close();
            }
            return student;
        }
    }
}
