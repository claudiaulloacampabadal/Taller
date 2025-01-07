using SandboxProf.Models.Domain;
using System.Data.SqlClient;

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

            using (SqlConnection )
            {

            }
        }
    }
}
